// 1. Extracting book titles
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
  ];
  
  const bookTitles = books.map(book => book.title);
  console.log(bookTitles);
  
    
  // 2. Converting fruit names to uppercase
  const fruits = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "kiwi", color: "brown" },
  ];
  
  const upperCaseFruits = fruits.map(fruit => ({
    name: fruit.name.toUpperCase(),
    color: fruit.color
  }));
  
  console.log(upperCaseFruits);
  
    
  // 3. Increasing salaries by 10%
  const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 70000 },
  ];
  
  const updatedSalaries = employees.map(employee => ({
    name: employee.name,
    salary: (employee.salary * 1.1).toFixed(2)
  }));
  
  console.log(updatedSalaries);
  
    
  // 4. Applying a 20% discount
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Headphones", price: 100 },
  ];
  
  const discountedProducts = products.map(product => ({
    name: product.name,
    price: product.price * 0.8
  }));
  
  console.log(discountedProducts);
  
    
  // 5. Converting Celsius to Fahrenheit
  const cities = [
    { name: "New York", temperature: 25 },
    { name: "Los Angeles", temperature: 30 },
    { name: "Chicago", temperature: 20 },
  ];
  
  const convertedCities = cities.map(city => ({
    name: city.name,
    temperature: Math.round((city.temperature * 9/5) + 32)
  }));
  
  console.log(convertedCities);
  
    
  // 6. Calculating annual income with summer bonus
  const teachers = [
    { name: "Olivia", monthlySalary: 4500 },
    { name: "Paul", monthlySalary: 5500 },
    { name: "Rachel", monthlySalary: 5000 },
  ];
  
  const annualIncomeTeachers = teachers.map(teacher => ({
    name: teacher.name,
    annualIncome: (teacher.monthlySalary * 12) + 500
  }));
  
  console.log(annualIncomeTeachers);
  
    
  // 7. Calculating population density
  const countries = [
    { name: "USA", population: 331000000, landArea: 9833517 },
    { name: "India", population: 1393000000, landArea: 2973190 },
    { name: "Brazil", population: 213993437, landArea: 8515767 },
  ];
  
  const populationDensity = countries.map(country => ({
    name: country.name,
    populationDensity: country.population / country.landArea
  }));
  
  console.log(populationDensity);
  