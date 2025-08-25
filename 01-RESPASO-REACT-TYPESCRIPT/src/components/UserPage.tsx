import { useUsers } from "../hooks/useUser";

export const UserPage = () => {
  const { user } = useUsers();
  return (
    <>
      <h1>UserPage</h1>

      <table className="W-[500] bg-black rounded-xl text-white">
        <thead>
          <tr className="p-2">
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.avatar} />
              </td>
              <td>{item.first_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
