// Adiciona campos de dano às armas

export function registerWeaponDurability() {
  Hooks.on('renderItemSheet', (app, html, data) => {
    const item = app.item;

    if(item.isOwner && item.type === "weapon") {      
      const notch = item.flags.world?.notch ?? '0';
      let myContent = $(`<table><tbody>
      <tr>
          <th>Notches</th>
      </tr>
      
      <tr>
          <td>
              <input name="flags.world.notch" type="text" value="${notch}">
          </td>
      </tr></tbody></table>`);
      html.find('input[name="system.quantity"]').parent().parent().after(myContent);
    }
  });
}
