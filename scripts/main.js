// Dragonbane Durability & Morale Module
// Main module file that imports all scripts

import { registerArmorDurability } from './armor-durability.js';
import { registerHelmetDurability } from './helmet-durability.js';
import { registerWeaponDurability } from './weapon-durability.js';
import { registerTotalArmorDurability } from './total-armor-durability.js';
import { registerNPCMorale } from './npc-morale.js';
import { registerMonsterMorale } from './monster-morale.js';

Hooks.once('init', async function() {
  console.log('Dragonbane Durability & Morale | Initializing module');
  
  // Carregar traduções
  game.i18n.localize("dragonbane-durability-morale.durability.title");
  
  // Registrar configurações do módulo
  game.settings.register('dragonbane-durability-morale', 'moduleEnabled', {
    name: game.i18n.localize("dragonbane-durability-morale.settings.moduleEnabled.name"),
    hint: game.i18n.localize("dragonbane-durability-morale.settings.moduleEnabled.hint"),
    scope: 'world',
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once('ready', async function() {
  // Verificar se o módulo está ativado
  if (game.settings.get('dragonbane-durability-morale', 'moduleEnabled')) {
    // Registrar todos os hooks quando o sistema estiver pronto
    registerArmorDurability();
    registerHelmetDurability();
    registerWeaponDurability();
    registerTotalArmorDurability();
    registerNPCMorale();
    registerMonsterMorale();
    
    console.log('Dragonbane Durability & Morale | Module Ready');
  }
});
