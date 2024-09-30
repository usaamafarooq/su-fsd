export const customSort = (a: string, b: string) => {
  const regex = /(\d+)|(\D+)/g;
  const aParts = a.match(regex);
  const bParts = b.match(regex);

  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] || "";
    const bPart = bParts[i] || "";

    const aIsNum = !isNaN(Number(aPart));
    const bIsNum = !isNaN(Number(bPart));

    if (aIsNum && bIsNum) {
      // Compare as numbers
      const numComparison = Number(aPart) - Number(bPart);
      if (numComparison !== 0) return numComparison;
    } else {
      // Compare as strings
      const strComparison = aPart.localeCompare(bPart);
      if (strComparison !== 0) return strComparison;
    }
  }
  return 0; // They are equal
};
