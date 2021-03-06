import React from "react";
// import NumberRadio from "./NumberRadio";

const emotions = [
  { id: 1, name: "Happy" },
  { id: 2, name: "Excited" },
  { id: 3, name: "Inspired" },
  { id: 4, name: "Calm" },
  { id: 5, name: "Neutral" },
  { id: 6, name: "Stressed" },
  { id: 7, name: "Anxious" },
  { id: 8, name: "Sad" },
  { id: 9, name: "Angry" },
  { id: 10, name: "Overwhelmed" },
  { id: 11, name: "Exhausted" }
];

class MoodSelect extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleRadioChange } = this.props;

    let emotionList = emotions.map(item => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    }, this);

    // let radioBtn = [1, 2, 3, 4, 5].map(values => {
    //   const activeRadio = values.selectedIntensity === values.toString();

    //   return (
    //     <label
    //       className={
    //         values.selectedIntensity === activeRadio
    //           ? "btn btn-secondary active"
    //           : "btn btn-secondary"
    //       }
    //     >
    //       <input
    //         type="radio"
    //         name="options"
    //         value={values}
    //         checked={values.selectedIntensity === activeRadio}
    //         onChange={handleRadioChange}
    //       />
    //     </label>
    //   );
    // });
    //need to retrieve intensity selected from radio button

    return (
      <form className="multiStep shadow-sm">
        <div className="form-row form-group">
          <label className="mb-3" htmlFor="moodDropdown">
            Select your current mood:
          </label>
          <select
            className="custom-select btn-outline-next"
            id="moodDropdown"
            onChange={handleChange("emotion")}
          >
            {emotionList}
          </select>
        </div>
        <div className="form-row form-inline mt-5">
          <label htmlFor="options">Select the intensity:</label>

          <div className="ml-4 btn-group btn-group-toggle form-check">
            {Array.from(Array(5).keys()).map(a => (
              <label
                key={a}
                className={
                  values.selectedIntensity === a + 1
                    ? "btn btn-secondary active"
                    : "btn btn-secondary"
                }
              >
                <input
                  type="radio"
                  name="options"
                  value={a + 1}
                  checked={values.selectedIntensity === a + 1}
                  onChange={handleRadioChange}
                />
                {a + 1}
              </label>
            ))}
          </div>
        </div>
        <div className="form-row btn-row-next">
          <button
            type="button"
            className="btn btn-outline-next"
            onClick={this.continue}
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}

// <NumberRadio onChange={handleChange} values={values} />

export default MoodSelect;
