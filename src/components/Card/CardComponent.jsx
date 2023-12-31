export const CardComponent = () => {
  return (
    <div data-testid="card-testid">
      <h1>Robert Santos</h1>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        data-testid="github-link"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        data-testid="linkedin-link"
      >
        Linkedin
      </a>
    </div>
  );
};
