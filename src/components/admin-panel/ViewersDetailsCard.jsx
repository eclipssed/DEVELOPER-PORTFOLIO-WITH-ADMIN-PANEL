const headings = [
  "S.No",
  "IP Address",
  "Country",
  "City",
  "Currency",
  "Viewing Device",
  "ViewedAt",
];

const ViewersDetailsCard = ({ viewersDetails }) => {
  //   console.log(viewersDetails);

  return (
    <div className="max-h-[50vh] scrollbar-corner-secondary overflow-y-scroll scrollbar-thumb-secondary scrollbar-track-dark scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded overflow-x-hidden">
      <table border="1">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th className="border border-slate-500 p-4" key={index}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {viewersDetails.map((viewer, index) => (
            <>
              <tr key={viewer.id}>
                <td className="border border-slate-500 p-4">{index + 1}</td>
                <td className="border border-slate-500 p-4">{viewer.ip}</td>
                <td className="border border-slate-500 p-4">
                  {viewer.country}
                </td>
                <td className="border border-slate-500 p-4">{viewer.city}</td>
                <td className="border border-slate-500 p-4">
                  {viewer.currency}
                </td>
                <td className="border border-slate-500 p-4">
                  {viewer.mobileUser ? "Mobile" : "Desktop"}
                </td>
                <td className="border border-slate-500 p-4">
                  {viewer.viewedAt}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewersDetailsCard;
