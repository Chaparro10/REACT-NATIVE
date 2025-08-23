import { useAuthContext } from "../context/AuthContex";

export const LoginPage = () => {
  const { isChecking, isAuthenticated,loginWithEmailPassword,user,logout } = useAuthContext();

  if (isChecking) {
    return <h1>Verificando usuario</h1>;
  }

  return (
    <div>
      <h1>LoginPage</h1>
      {isAuthenticated ? (
        <div>
          <h1>Bienvenido</h1>
          <pre>{JSON.stringify(user,null,2)}</pre>
          <button onClick={()=>logout()} className="bg-blue-500 p-2 text-white rounded-xl mt-2">
            Salir
          </button>
        </div>
      ) : (
        <div>
          <h3>Ingresar a la aplicacion</h3>
          <button  onClick={()=>loginWithEmailPassword("kevin@gmail.com","124")}
          className="bg-blue-500 p-2 text-white rounded-xl mt-2">
            Ingresar
          </button>
        </div>
      )}
    </div>
  );
};
