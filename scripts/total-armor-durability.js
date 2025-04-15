// Versão simplificada que usa apenas um campo editável manualmente

export function registerTotalArmorDurability() {
    Hooks.on('renderActorSheet', (app, html, data) => {
      const actor = app.actor;
  
      if(actor.isOwner) {      
        // Obter o valor atual ou definir como 0
        let totalarmordurability = actor.getFlag("world", "totalarmordurability") || '0';
        
        // Obtenha a string traduzida
        const totalArmorLabel = game.i18n.localize("dragonbane-durability-morale.durability.totalArmor");
        
        // Criando uma tabela com classe "derived-stat"
        let myContent = $(`
          <table class="derived-stat armor-durability-stat">
            <tr>
              <th>${totalArmorLabel}</th>
              <td>
                <input class="armor-durability-input" name="flags.world.totalarmordurability" type="number" 
                      value="${totalarmordurability}" data-dtype="number">
              </td>
            </tr>
          </table>
        `);
        
        // Inserir após a última tabela "armor"
        const armorRow = $(html.find('div.flexrow').has('table.armor').last());
        
        // Se já existe uma div flexrow com tabelas derived-stat para durabilidade, use-a
        // caso contrário, crie uma nova
        let existingDurabilityRow = $(html.find('div.flexrow.durability-stats-row'));
        
        if (existingDurabilityRow.length) {
          // Adicionar à linha existente
          existingDurabilityRow.append(myContent);
        } else {
          // Criar uma nova linha flex para abrigar a tabela
          let newRow = $(`<div class="flexrow durability-stats-row"></div>`);
          newRow.append(myContent);
          armorRow.after(newRow);
        }
        
        // Adicionar listener para salvar o valor quando alterado
        $(html).find('input[name="flags.world.totalarmordurability"]').change(async function() {
          const newValue = $(this).val();
          await actor.setFlag("world", "totalarmordurability", parseInt(newValue) || 0);
        });
      }
    });
  }
