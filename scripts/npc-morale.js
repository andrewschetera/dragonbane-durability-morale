// Adiciona campo de moral para NPCs

export function registerNPCMorale() {
  Hooks.on('renderActorSheet', (app, html, data) => {
    const actor = app.actor;

    if(game.user.isGM && actor.type == "npc") {      
      const morale = actor.flags.world?.morale ?? '';
      
      // Obtenha a string traduzida
      const moraleLabel = game.i18n.localize("dragonbane-durability-morale.morale.title");
      
      let myContent = $(`<tr>
                          <th>${moraleLabel}</th>
                          <td><input class="attribute-input active-effect-property" data-property="flags.world.morale" name="flags.world.morale" type="text" value="${morale}"></td>
                      </tr>
      `);
      html.find('input[name="system.movement.value"]').parent().parent().parent().after(myContent);
    }
  });
}
