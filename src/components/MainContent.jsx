function MainContent({ children, className }) {
  return <div className={`flex-3 ${className}`}>{children}</div>;
}

export default MainContent;
