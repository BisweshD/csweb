function Menu({active, setActive, setCategory}) {
  const links = [
    { id: 1, name: "AI", value: "AI" },
    { id: 2, name: "Quantum Leap", value: "QuantumLeap" },
    { id: 3, name: "Tech Spotlight", value: "TechSpotlight" },
    { id: 4, name: "Innovative Careers", value: "InnovativeCareers" },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <nav className="menu">
      <ul>
        {links.map(link => (
          <li 
            key={link.id}
            className={active === link.id ? "active" : ""} 
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
