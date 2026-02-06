const PlaceholderPage = ({ title, description }) => {
  return (
    <div style={{ padding: '120px 0 80px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '24px',
            color: 'var(--color-text)',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--color-text-muted)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
