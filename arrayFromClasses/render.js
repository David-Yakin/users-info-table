export function renderUsers(users) {
  const $elem = document.getElementById("render-result");
  $elem.innerHTML = "";

  users.forEach((user) => {
    $elem.innerHTML += `
          <tr>
            <td class="border p-2">${user.name}</td>
              <td class="border p-2">${user.email}</td>
              <td class="border p-2">${user.username}</td>
              <td class="border p-2">${user.id}</td>
              <td class="border p-2">${user.phone}</td>
              <td class="border p-2">${user.address.street}</td>
              <td class="border p-2">${user.company.name}</td>
          </tr> 
          `;
  });
}

export function renderError(err) {
  const $elem = document.getElementById("render-result");
  $elem.innerHTML = `<b>Error:</b> ${err.error}`;
}

export function renderUsersTable2(users) {
  const $elem = document.getElementById("render-result-second-table");
  $elem.innerHTML = "";

  users.forEach((user) => {
    $elem.innerHTML += `
          <tr>
            <td class="border p-2">${user.name}</td>
              <td class="border p-2">${user.website}</td>
              <td class="border p-2">${user.address.city}</td>
              <td class="border p-2">${user.address.zipcode}</td>
              <td class="border p-2">${user.company.catchPhrase}</td>
              <td class="border p-2">${user.company.bs}</td>
          </tr> 
          `;
  });
}