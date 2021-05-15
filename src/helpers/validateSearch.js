export function validateSearch(date, errorMessage) {
      let regex = /^\d{4}-\d{2}-\d{2}$/;

      if (!date.match(regex) || date == null) {
        errorMessage = true;
        return;
      } else {
        errorMessage = false;
      }
    }