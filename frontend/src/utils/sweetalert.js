import Swal from "sweetalert2";

export const getSweetAlertInputValue = async (title, inputName, confirmButtonText) => {
    const result = await Swal.fire({
        title: title,
        html: `
        <p>Please enter ${inputName}:</p>
        <input type="text" id=${inputName} class="swal2-input" placeholder="${inputName[0].toUpperCase()}${inputName.slice(1)}" maxlength="10">
        `,
        confirmButtonText: confirmButtonText,
        showLoaderOnConfirm: true,
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        preConfirm: () => {
          const inputValue = Swal.getPopup().querySelector(`#${inputName}`).value;
          if (!inputValue) {
            Swal.showValidationMessage(`${inputName} is invalid!`);
          }
          return { inputValue };
        },
      })
      return result.value.inputValue;
}