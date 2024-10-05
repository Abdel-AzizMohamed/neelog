import SelectField from "./ArticleSide/SelectField";

function ArticleSide() {
  return (
    <form action="" method="POST">
      <h2 className="publish-title">publish</h2>
      <SelectField />
      <SelectField />
      <SelectField />
      <input type="submit" value="publish" />
    </form>
  );
}

export default ArticleSide;
