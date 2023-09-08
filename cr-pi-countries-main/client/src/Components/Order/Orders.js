
export const ordPopulation = (a, b) => {
    return a.population - b.population
}

export const ordAlphabetic = (a, b, descendent = false) => {
    if (descendent) {
        return b.name.localeCompare(a.name);
      } else {
        return a.name.localeCompare(b.name);
      }
    };
