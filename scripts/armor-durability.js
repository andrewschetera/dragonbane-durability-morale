// Adiciona campos de durabilidade às armaduras

export function registerArmorDurability() {
  Hooks.on('renderItemSheet', (app, html, data) => {
    const item = app.item;

    if(item.isOwner && item.type === "armor") {      
      const durability = item.flags.world?.durability ?? '0';
      const notch = item.flags.world?.notch ?? '0';
      let myContent = $(`<table style="border-style:none;border-width:0px" border="0"><tbody>
<tr>
          <th style="border-width:0px">Durability</th>
          <th style="border-width:0px">Notches</th>
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
