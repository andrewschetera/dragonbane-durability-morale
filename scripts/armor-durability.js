// Adiciona campos de durabilidade às armaduras

export function registerArmorDurability() {
  Hooks.on('renderItemSheet', (app, html, data) => {
    const item = app.item;

    if(item.isOwner && item.type === "armor") {      
      const durability = item.flags.world?.durability ?? '0';
      const notch = item.flags.world?.notch ?? '0';
      
      // Obtenha as strings traduzidas
      const durabilityLabel = game.i18n.localize("dragonbane-durability-morale.durability.title");
      const notchLabel = game.i18n.localize("dragonbane-durability-morale.durability.notch");
      
      let myContent = $(`<table style="border-style:none;border-width:0px" border="0"><tbody>
<tr>
          <th style="border-width:0px">${durabilityLabel}</th>
          <th style="border-width:0px">${notchLabel}</th>
</tr><tr>
          <td style="border-width:0px">
              <input name="flags.world.durability" type="text" value="${durability}">
          </td>
          <td style="border-width:0px">
              <input name="flags.world.notch" type="text" value="${notch}">
          </td>
</tr></tbody></table>`);
      html.find('input[name="system.quantity"]').parent().parent().after(myContent);
    }
  });
}
