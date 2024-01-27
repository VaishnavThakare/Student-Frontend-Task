import "./Individual.css";
import EditForm from "./EditForm";
const Individual = (selectedTab, setSelectedTab) => {
  return (
    <>
      <div className="individual">
        <h2 className="h2individual">Individual Details</h2>
        <div className="newIndividual">
          <table>
            <tbody>
              <tr>
                <td>Name </td>
                <td>Vaishnav</td>
              </tr>
              <tr>
                <td>Enrollment number </td>
                <td>B20V0021020</td>
              </tr>
              <tr>
                <td>User Name</td>
                <td>abc@123</td>
              </tr>
              <tr>
                <td>Mail-Id</td>
                <td>vaishnav@mitaoe.ac.in</td>
              </tr>
              <tr>
                <td>College Name</td>
                <td>MITAOE</td>
              </tr>
              <tr>
                <td>Section</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>Fees Status</td>
                <td>Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Individual;
