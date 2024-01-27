import "./EditForm.css";
const EditForm = () => {
  return (
    <>
      <div className="edit1">
        <h2 className="h2edit">Edit Form</h2>
        <form className="editform">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>
                  <input className="input1" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="age">Enrollment number</label>
                </td>
                <td>
                  <input className="input1" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="gender">User name</label>
                </td>
                <td>
                  <input className="input1" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="historyOfMedicine">MailId</label>
                </td>
                <td>
                  <input type="email" className="input1"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="nextvisit">College Name</label>
                </td>
                <td>
                  <input type="text" className="input1" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="nextvisit">Section</label>
                </td>
                <td>
                  <input type="text" className="input1" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="nextvisit">Result</label>
                </td>
                <td>
                  <input type="text" className="input1" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="nextvisit">Fees Status</label>
                </td>
                <td>
                  <input type="text" className="input1" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="button" className="editbtn1">
                    Cancel
                  </button>
                  <button type="submit" className="editbtn1">
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default EditForm;
