import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  // Redirect to home where the gallery modal is
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Layout>
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </Layout>
  );
}
