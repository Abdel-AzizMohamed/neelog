import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToolBox() {
  return (
    <ul>
      <li>
        <FontAwesomeIcon icon="bold" />
      </li>
      <li>
        <FontAwesomeIcon icon="italic" />
      </li>
      <li>
        <FontAwesomeIcon icon="list-dots" />
      </li>
    </ul>
  );
}

export default ToolBox;
