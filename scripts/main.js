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
});

Hooks.once('ready', async function() {
  // Registrar todos os hooks quando o sistema estiver pronto
  registerArmorDurability();
  registerHelmetDurability();
  registerWeaponDurability();
  registerTotalArmorDurability();
  registerNPCMorale();
  registerMonsterMorale();
  
  console.log('Dragonbane Durability & Morale | Module Ready');
});
