"use client";
import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
const ModalProvider =() => {

  const [isMounted, setIsMounted]= useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { user, isLoading } = useUser();
  if (!isMounted) {
    return null;
  }
  return (<>
  <AuthModal/>
  <UploadModal/>
 
  </>
  );
}
export default ModalProvider;     