// Adiciona campos de dano às armas

export function registerWeaponDurability() {
  Hooks.on('renderItemSheet', (app, html, data) => {
    const item = app.item;

    if(item.isOwner && item.type === "weapon") {      
      const notch = item.flags.world?.notch ?? '0';
      
      // Obtenha a string traduzida
      const notchLabel = game.i18n.localize("dragonbane-durability-morale.durability.notch");
      
      let myContent = $(`<table><tbody>
      <tr>
          <th>${notchLabel}</th>
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
