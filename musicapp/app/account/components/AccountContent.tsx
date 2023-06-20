"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";


const AccountContent = () => {
    const router = useRouter();
    const subscribeModal = useSubscribeModal();
    const { isLoading, subscription, user } = useUser();
  
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!isLoading && !user) {
          router.replace('/');
        }
      }, [isLoading, user, router]);
     
        
    return (  <div className="mb-7 px-6">
    {!subscription && (
      <div className="flex flex-col gap-y-4">
      <p>Premium user  </p>
      <p
        className="w-[250px]"
      >
       You have a paid subscription
       Annual subscription is 20 lei on year .
        
      </p>
      <p
        className="w-[550px]"
      >
       If you have a problem and want to buy a subscription send an email to :
       bodnarescu.beniamin@yahoo.com
      </p>
    </div>
    )}
  </div>
);
}
 
export default AccountContent;