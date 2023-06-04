import AppBarSection from './appBar';

export default function Layout({ children }) {
  return (
    <>
      <AppBarSection />

      {children}
    </>
  );
}
