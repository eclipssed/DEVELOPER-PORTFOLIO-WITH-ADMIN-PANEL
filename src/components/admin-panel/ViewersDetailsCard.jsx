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
              <th className="border border-slate-500 py-2 px-1" key={index}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {viewersDetails.map((viewer, index) => (
            <>
              <tr key={viewer.id}>
                <td className="border border-slate-500 py-2 px-1 ">
                  {index + 1}
                </td>
                <td className="border border-slate-500 py-2 px-1 ">
                  {viewer.ip}
                </td>
                <td className="border border-slate-500 py-2 px-1">
                  {viewer.country}
                </td>
                <td className="border border-slate-500 py-2 px-1">
                  {viewer.city}
                </td>
                <td className="border border-slate-500 py-2 px-1">
                  {viewer.currency}
                </td>
                <td className="border border-slate-500 py-2 px-1">
                  {viewer.mobileUser ? "Mobile" : "Desktop"}
                </td>
                <td className="border border-slate-500 py-2 px-1">
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
