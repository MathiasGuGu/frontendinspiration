import React from "react";
import CreateCategoryForm from "./CreateCategoryForm";
import CreatePostDrawer from "../_components/Posts/CreatePostDrawer";

const AdminField = ({
  choice,
}: {
  choice: "resources" | "categories" | "tech-stacks";
}) => {
  switch (choice) {
    case "categories":
      return (
        <>
          <CreateCategoryForm />
        </>
      );
    case "resources":
      return (
        <>
          <CreatePostDrawer />
        </>
      );
    case "tech-stacks":
      return <>Tech stacks</>;
    default:
      return <></>;
  }
};

export default AdminField;
