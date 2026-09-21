const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = new Map();
const handlers = {};
function element(id) {
  if (!elements.has(id)) elements.set(id, {innerHTML:'',textContent:'',style:{},dataset:{},disabled:false,offsetWidth:1,classList:{add(){},remove(){},toggle(){return true;}},setAttribute(){},focus(){},scrollIntoView(){}});
  return elements.get(id);
}
const sandbox = {console,Set,clearTimeout,setTimeout,location:{hash:''},localStorage:{getItem(){return null;},setItem(){}},document:{querySelector:element,querySelectorAll(){return [];},addEventListener(type,fn){(handlers[type]??=[]).push(fn);}},window:{scrollTo(){},addEventListener(){}}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data.js','utf8')+'\n'+fs.readFileSync('app.js','utf8'),sandbox);
function run(js){return vm.runInContext(js,sandbox);}
for (const page of ['home','ai-war','models','timeline','future-2030','developer-2030','jobs','skills','agents','resources','about']) {
 sandbox.location.hash='#/'+page; run('route()');
 assert.ok(element('#main').innerHTML.length>500, page+' renders');
 assert.ok(!element('#main').innerHTML.includes('undefined'), page+' has defined content');
}
sandbox.location.hash='#/models';run('route(); state.query="no-such-model"; renderModels()');
assert.match(element('#model-results').innerHTML,/No matching models/);
run('state.query=""; state.provider="Anthropic"; renderModels()');
assert.match(element('#model-results').innerHTML,/Claude 3.5 Sonnet/);
assert.ok(!element('#model-results').innerHTML.includes('GPT-4o'));
run('state.provider="All"; state.compare.add("gpt4o"); state.compare.add("sonnet35"); compare()');
assert.match(element('#comparison').innerHTML,/<table>/);
assert.match(element('#comparison').innerHTML,/Known limitations/);
sandbox.location.hash='#/future-2030';run('route(); state.year=2026; state.future="Conservative"; updateFuture()');
const early=element('#simulation-rows').innerHTML;
run('state.year=2030; state.future="Agentic"; updateFuture()');
assert.notEqual(element('#simulation-rows').innerHTML,early);
assert.equal(element('#year-label').textContent,2030);
sandbox.location.hash='#/skills';run('route(); analyze()');
assert.match(element('#skill-result').innerHTML,/0 of 9/);
run('DATA.roleSkills.Frontend.forEach(s=>state.skills.add(s)); analyze()');
assert.match(element('#skill-result').innerHTML,/9 of 9/);
assert.match(element('#skill-result').innerHTML,/Ready to put/);
sandbox.location.hash='#/agents';run('route(); state.team.add("Tester"); state.team.add("Planner"); buildTeam()');
assert.match(element('#team-result').innerHTML,/2 SPECIALISTS/);
assert.match(element('#team-result').innerHTML,/Human review/);
run('state.agent=4; updateAgent()');
assert.match(element('#agent-detail').innerHTML,/Security Agent/);
run('state.jobFilter="New roles"');assert.match(run('jobs()'),/Synthetic Data Engineer/);
sandbox.location.hash='#/invalid';run('route()');assert.match(element('#main').innerHTML,/unmapped/);
console.log('PASS: 11 route renders, unknown route, model search/filter/comparison, scenario updates, skill analysis, agent inspection, team generation, and new-role listing.');
