import PrimaryProfileCard from './PrimaryProfileCard.jsx';
import AccountsDirectory from './AccountsDirectory.jsx';
import styles from './GitHubCollection.module.css';

export default function GitHubCollection() {
  return (
    <section className="section" id="github">
      <div className="s-label">Version Control</div>
      <h2 className="s-title">GitHub Presence</h2>
      <p className={styles.subtitle}>
        Primary development profile, plus an archive of legacy testing and demo deployments.
      </p>

      <PrimaryProfileCard />
      <AccountsDirectory />
    </section>
  );
}

