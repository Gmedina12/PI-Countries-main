export default (input) => {
    const errors = {};
    if ($("#name").val() == (/[A-Za-z0-9-\s+@+.+-]/)) {
        errors.e1 = 'Symbols are not allowed'
   }
   if (!input.name){
    errors.e2 = 'Name is missing'
   }
   if (input.name.length < 5){
    errors.e3 = "Activity's name is too short. Please type a full activity"
   }
}