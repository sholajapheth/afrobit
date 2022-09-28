import { MutatingDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";

function App() {
  const login = useSelector((state) => state.login.loading);
  const register = useSelector((state) => state.register.loading);
  const swapHistory = useSelector((state) => state.swap_history.loading);
  return (
    <div className="">
      {login || swapHistory || register ? (
        <div className="flex flex-col items-center pt-[10em] w-full bg-slate-600 h-screen">
          <MutatingDots
            height="100"
            width="100"
            color="#EDD78F"
            secondaryColor="#000000"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
