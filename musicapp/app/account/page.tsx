import AccountContent from "./components/AccountContent";
import Header from "@/components/Header";
const Account = () => {
    return (  <div className="bg-blue-600 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      ">   <Header className="from-bg-neutral-900">
      <div className="mb-2 flex flex-col gap-y-6">
        <h1 className="text-white text-3xl font-semibold">
          Account informations
        </h1>
        <AccountContent />
      </div>
    </Header></div>);
}
 
export default Account;