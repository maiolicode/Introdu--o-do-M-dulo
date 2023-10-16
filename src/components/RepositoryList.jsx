const repositoryName = "unform";

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository list</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms In React</p>
          <a href="#">Access</a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms In React</p>
          <a href="#">Access</a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms In React</p>
          <a href="#">Access</a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms In React</p>
          <a href="#">Access</a>
        </li>
      </ul>
    </section>
  );
}
