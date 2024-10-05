function TextField({ setTitle }) {
  return (
    <input
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      placeholder="Enter title here..."
    />
  );
}

export default TextField;
