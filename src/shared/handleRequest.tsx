export  const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348080548331?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };