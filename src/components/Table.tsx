const headers = [
  { name: "", key: "" },
  { name: "Name", key: "name" },
  { name: "Job", key: "job" },
  { name: "Favorite Color", key: "favoriteColor" },
];

const DUMMY_DATA = [
  {
    id: 1,
    name: "Hart Hagerty",
    job: "Desktop Support Technician",
    favoriteColor: "Purple",
  },
  {
    id: 2,
    name: "Brice Swyre",
    job: "Tax Accountant",
    favoriteColor: "Red",
  },
  {
    id: 3,
    name: "Marjy Ferencz",
    job: "Office Assistant I",
    favoriteColor: "Crimson",
  },
  {
    id: 4,
    name: "Yancy Tear",
    job: "Community Outreach Specialist",
    favoriteColor: "Indigo",
  },
];

const rows = DUMMY_DATA;

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={`https://img.daisyui.com/images/profile/demo/${item.id}@94.webp`}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">Country</div>
                  </div>
                </div>
              </td>
              <td>
                Company Name
                <br />
                <span className="badge badge-ghost badge-sm">{item.job}</span>
              </td>
              <td>{item.favoriteColor}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
