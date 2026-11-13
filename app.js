'use strict';
const $=id=>document.getElementById(id);const status=s=>{$('status').textContent=s};
const names={A:['Flat Dumbbell Bench Press','Incline Dumbbell Press','Alternating Biceps Curl','Single-Arm Dumbbell Row','Bulgarian Split Squat','Reverse Crunch','Forearm Plank',"Farmer’s Carry",'Calf Lifts'],B:['Hammer Curls','Lying Dumbbell Triceps Extension','Seated Dumbbell Shoulder Press','Dumbbell Lateral Raises','Neutral-Grip Dumbbell Floor Press','Dumbbell Romanian Deadlift','Weighted Crunch','Side Plank','Calf Lifts']};
const rows=[7,23,40,58,76,94,112,130,148,166];
const cues={
'Flat Dumbbell Bench Press':['Chest, triceps, front shoulders','Retract shoulder blades; elbows about 45° from torso; lower under control and press steadily.'],
'Incline Dumbbell Press':['Upper chest, triceps, shoulders','Set bench at a modest incline; keep shoulder blades back; lower slowly.'],
'Alternating Biceps Curl':['Biceps, forearms','Keep elbows close to ribs; avoid swinging; lower fully before switching arms.'],
'Single-Arm Dumbbell Row':['Lats, upper back, biceps','Support torso, keep back neutral, and pull elbow toward hip.'],
'Bulgarian Split Squat':['Quads, glutes','Rear foot supported; lower straight down, front knee tracking over toes.'],
'Reverse Crunch':['Lower abdominals, core','Curl pelvis toward ribs without swinging legs; control the descent.'],
'Forearm Plank':['Core, shoulders','Brace abs and glutes; keep a straight line from head to heels.'],
'Farmer’s Carry':['Grip, traps, core','Walk tall with weights at sides; resist leaning and keep shoulders level.'],
'Calf Lifts':['Calves','Rise through balls of feet; pause at top and lower slowly through full range.'],
'Hammer Curls':['Biceps, brachialis, forearms','Keep palms facing inward, elbows still, and avoid swinging.'],
'Lying Dumbbell Triceps Extension':['Triceps','Keep upper arms relatively still; bend elbows to lower weights, then extend.'],
'Seated Dumbbell Shoulder Press':['Deltoids, triceps','Brace torso; press upward without arching low back; lower with control.'],
'Dumbbell Lateral Raises':['Side deltoids','Lead with elbows, use light weights, and stop around shoulder height.'],
'Neutral-Grip Dumbbell Floor Press':['Chest, triceps','Keep palms facing each other; gently touch upper arms to floor; press up.'],
'Dumbbell Romanian Deadlift':['Hamstrings, glutes, lower back','Hinge hips back with soft knees; keep dumbbells close and spine neutral.'],
'Weighted Crunch':['Abdominals','Curl ribs toward pelvis, not chin toward chest; use a small controlled range.'],
'Side Plank':['Obliques, lateral core','Stack shoulders and hips; lift hips and hold straight alignment.']};
// Original vector movement illustrations. Each exercise has its own pose category.
const patterns={
'Flat Dumbbell Bench Press':'flat','Incline Dumbbell Press':'incline','Alternating Biceps Curl':'curl','Single-Arm Dumbbell Row':'row','Bulgarian Split Squat':'split','Reverse Crunch':'crunch','Forearm Plank':'plank','Farmer’s Carry':'carry','Calf Lifts':'calf','Hammer Curls':'hammer','Lying Dumbbell Triceps Extension':'triceps','Seated Dumbbell Shoulder Press':'shoulder','Dumbbell Lateral Raises':'lateral','Neutral-Grip Dumbbell Floor Press':'floor','Dumbbell Romanian Deadlift':'hinge','Weighted Crunch':'crunch','Side Plank':'side'};
function figure(type,finish){
 const upright=['curl','hammer','carry','calf','lateral','shoulder'].includes(type);
 const floor=['flat','incline','floor','triceps','crunch','plank','side'].includes(type);
 let paths='';
 if(upright){
  const y=finish&&type==='calf'?-9:0;
  paths=`<circle cx="110" cy="45" r="15"/><path d="M110 61 L110 123 M110 123 L89 ${195+y} M110 123 L132 ${195+y}"/>`;
  if(type==='shoulder')paths+=finish?'<path d="M110 76 L78 39 L78 13 M110 76 L142 39 L142 13"/>':'<path d="M110 76 L80 84 L80 55 M110 76 L140 84 L140 55"/>';
  else if(type==='lateral')paths+=finish?'<path d="M110 77 L60 68 L26 66 M110 77 L160 68 L194 66"/>':'<path d="M110 77 L86 115 L80 150 M110 77 L134 115 L140 150"/>';
  else if(type==='curl'||type==='hammer')paths+=finish?'<path d="M110 77 L83 105 L85 68 M110 77 L137 105 L135 68"/>':'<path d="M110 77 L82 116 L83 150 M110 77 L138 116 L137 150"/>';
  else paths+='<path d="M110 77 L81 118 L80 156 M110 77 L139 118 L140 156"/>';
 }else if(type==='row'||type==='hinge'){
 paths=finish?'<circle cx="92" cy="75" r="14"/><path d="M106 79 L162 111 L182 173 M162 111 L119 175 M133 92 L138 145 M148 104 L183 126 L198 92"/>':'<circle cx="83" cy="73" r="14"/><path d="M97 78 L160 112 L185 176 M160 112 L115 176 M120 90 L112 151 M146 105 L155 154"/>';
 }else if(type==='split'){
 paths=finish?'<circle cx="110" cy="42" r="14"/><path d="M110 58 L111 114 L73 151 L70 182 M111 114 L151 145 L187 145 M111 72 L85 112 M111 72 L138 112"/>':'<circle cx="110" cy="42" r="14"/><path d="M110 58 L111 106 L92 145 L91 190 M111 106 L154 135 L190 135 M111 72 L87 114 M111 72 L135 114"/>';
 }else if(type==='plank'||type==='side'){
 paths='<circle cx="51" cy="93" r="13"/><path d="M64 94 L154 110 L207 121 M83 100 L77 145 L51 146 M154 110 L180 145"/>';
 }else if(type==='crunch'){
 paths=finish?'<circle cx="80" cy="79" r="14"/><path d="M94 86 L129 125 L173 125 L195 156 M129 125 L112 158 M99 102 L73 121"/>':'<circle cx="47" cy="125" r="14"/><path d="M61 128 L136 145 L176 122 L196 150 M130 144 L111 166 M89 136 L78 110"/>';
 }else{
 // Supine press and triceps extension, start/finish show weight position.
 paths='<circle cx="53" cy="111" r="14"/><path d="M67 113 L148 119 L187 142 L207 175 M146 119 L155 175"/>';
 paths+=finish?'<path d="M99 115 L110 55 L110 22 M133 118 L151 55 L151 22"/>':type==='triceps'?'<path d="M99 115 L110 56 L78 65 M133 118 L151 56 L183 65"/>':'<path d="M99 115 L101 79 L74 79 M133 118 L145 79 L172 79"/>';
 }
 return `<g stroke="#234e71" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none">${paths}</g><g fill="#f29a50" opacity=".8"><circle cx="110" cy="85" r="6"/></g>`;
}
function sketch(n){
 const a=names.A.indexOf(n);
 const b=names.B.indexOf(n);
 const bPhotos=['b_hammer','b_triceps','b_shoulder','b_lateral','b_floor','b_rdl','b_weighted','b_side','b_calf'];
 const file=a>=0?`a${a+1}`:b>=0?bPhotos[b]:null;
 if(!file)return '<p>Exercise illustration unavailable.</p>';
 return `<div class="photo-movement"><img src="assets/${file}.webp" alt="Start and finish demonstration for ${n}" loading="eager"><div class="movement-caption"><span>START</span><span>FINISH</span></div></div>`;
}

const muscleGroups={
'Flat Dumbbell Bench Press':['chest','triceps','shoulders'],'Incline Dumbbell Press':['chest','shoulders','triceps'],'Alternating Biceps Curl':['biceps','forearms'],'Single-Arm Dumbbell Row':['back','biceps'],'Bulgarian Split Squat':['quads','glutes'],'Reverse Crunch':['abs'],'Forearm Plank':['abs','shoulders'],'Farmer’s Carry':['forearms','back','abs'],'Calf Lifts':['calves'],'Hammer Curls':['biceps','forearms'],'Lying Dumbbell Triceps Extension':['triceps'],'Seated Dumbbell Shoulder Press':['shoulders','triceps'],'Dumbbell Lateral Raises':['shoulders'],'Neutral-Grip Dumbbell Floor Press':['chest','triceps'],'Dumbbell Romanian Deadlift':['hamstrings','glutes','back'],'Weighted Crunch':['abs'],'Side Plank':['abs']};
function anatomy(n){
 const groups=muscleGroups[n]||[];
 const on=k=>groups.includes(k)?'#f47738':'#d6dfe7';
 const line='#8c9ead';
 const front=`<g stroke="${line}" stroke-width="1.1" stroke-linejoin="round"><ellipse cx="78" cy="28" rx="14" ry="19" fill="#d6dfe7"/><path d="M66 47 L90 47 L95 62 L61 62Z" fill="#d6dfe7"/><path d="M63 60 Q78 55 93 60 L99 125 Q78 139 57 125Z" fill="#d6dfe7"/><path d="M60 64 Q47 58 41 77 L31 120 L43 124 L55 88Z M96 64 Q109 58 115 77 L125 120 L113 124 L101 88Z" fill="${on('shoulders')}"/><path d="M33 120 L29 164 L40 167 L44 122Z M112 122 L116 167 L127 164 L123 120Z" fill="${on('forearms')}"/><path d="M60 129 L78 134 L75 187 L61 187 L54 155Z M78 134 L96 129 L102 155 L95 187 L81 187Z" fill="${on('quads')}"/><path d="M61 188 L75 188 L73 231 L61 231Z M81 188 L95 188 L95 231 L83 231Z" fill="${on('calves')}"/><path d="M62 62 Q78 58 94 62 L90 91 Q78 101 66 91Z" fill="${on('chest')}"/><path d="M65 94 L91 94 L92 125 L64 125Z" fill="${on('abs')}"/><path d="M44 85 L54 91 L45 124 L34 121Z M102 91 L112 85 L122 121 L111 124Z" fill="${on('biceps')}"/><path d="M58 69 L48 84 L42 112 L52 114 L62 88Z M98 69 L108 84 L114 112 L104 114 L94 88Z" fill="none" stroke="${on('triceps')}" stroke-width="5"/></g>`;
 const back=`<g stroke="${line}" stroke-width="1.1" stroke-linejoin="round"><ellipse cx="178" cy="28" rx="14" ry="19" fill="#d6dfe7"/><path d="M166 47 L190 47 L195 62 L161 62Z" fill="#d6dfe7"/><path d="M162 60 Q178 55 194 60 L200 125 Q178 139 156 125Z" fill="${on('back')}"/><path d="M160 64 Q147 58 141 77 L131 120 L143 124 L155 88Z M196 64 Q209 58 215 77 L225 120 L213 124 L201 88Z" fill="${on('shoulders')}"/><path d="M133 120 L129 164 L140 167 L144 122Z M212 122 L216 167 L227 164 L223 120Z" fill="${on('forearms')}"/><path d="M159 129 L177 134 L175 187 L161 187 L154 155Z M179 134 L197 129 L202 155 L195 187 L181 187Z" fill="${on('hamstrings')}"/><path d="M161 188 L175 188 L173 231 L161 231Z M181 188 L195 188 L195 231 L183 231Z" fill="${on('calves')}"/><path d="M158 124 Q178 130 198 124 L197 145 Q178 154 159 145Z" fill="${on('glutes')}"/><path d="M145 83 L155 89 L145 125 L134 121Z M202 89 L212 83 L222 121 L211 125Z" fill="${on('triceps')}"/></g>`;
 return `<div class="anatomy-wrap"><svg viewBox="0 0 258 245" role="img" aria-label="Front and back anatomy with highlighted muscles for ${n}"><rect width="258" height="245" rx="12" fill="#f7fafc"/>${front}${back}<g fill="#537087" font-size="11" text-anchor="middle"><text x="78" y="243">FRONT</text><text x="178" y="243">BACK</text></g></svg><div class="anatomy-legend"><span><i></i> ${groups.map(g=>g.charAt(0).toUpperCase()+g.slice(1)).join(' · ')}</span></div></div>`;
}
const tips={
'Flat Dumbbell Bench Press':['Plant feet and pinch shoulder blades gently against bench.','Lower dumbbells toward mid-chest with elbows roughly 45° out.','Press smoothly upward, keeping wrists stacked over elbows.','Flaring elbows wide or bouncing at the bottom.'],
'Incline Dumbbell Press':['Set bench to a modest 20–30° incline.','Keep shoulder blades set and lower to upper-chest level.','Press up without shrugging your shoulders.','Using a very steep incline or arching excessively.'],
'Alternating Biceps Curl':['Stand tall with elbows tucked near ribs.','Curl one dumbbell without swinging your torso.','Lower slowly before switching sides.','Letting elbows drift forward or using momentum.'],
'Single-Arm Dumbbell Row':['Brace one hand on bench with a neutral spine.','Pull elbow toward your back pocket.','Lower until shoulder blade moves naturally, then repeat.','Twisting your trunk to lift the weight.'],
'Bulgarian Split Squat':['Set rear foot on a low bench and find a stable stance.','Lower your hips while front knee tracks over toes.','Drive through front foot to rise.','Pushing primarily from the rear leg.'],
'Reverse Crunch':['Lie on back with knees bent and ribs down.','Roll pelvis toward rib cage, lifting tailbone slightly.','Lower slowly without swinging legs.','Kicking legs upward instead of curling pelvis.'],
'Forearm Plank':['Place elbows under shoulders and extend legs.','Brace abdomen and glutes while breathing normally.','Keep ears, hips and heels in a straight line.','Letting low back sag or holding your breath.'],
'Farmer’s Carry':['Choose weights you can hold with upright posture.','Walk with short steady steps and shoulders level.','Brace core and keep dumbbells at your sides.','Leaning sideways or shrugging shoulders.'],
'Calf Lifts':['Stand tall with feet hip-width apart.','Rise onto balls of feet and pause at top.','Lower heels slowly through a comfortable range.','Bouncing quickly or rolling ankles outward.'],
'Hammer Curls':['Hold dumbbells with palms facing each other.','Keep elbows still and curl toward shoulders.','Lower under control with wrists neutral.','Swinging the weights or bending wrists.'],
'Lying Dumbbell Triceps Extension':['Lie supported with dumbbells above shoulders.','Bend elbows to lower weights beside head.','Extend elbows without flaring upper arms.','Moving shoulders excessively or dropping weights fast.'],
'Seated Dumbbell Shoulder Press':['Sit tall with core braced and feet planted.','Start dumbbells near shoulder height.','Press up smoothly, then lower with control.','Arching your lower back to finish the press.'],
'Dumbbell Lateral Raises':['Start light with soft elbows and palms inward.','Lift arms outward to roughly shoulder height.','Lower slowly without shrugging.','Swinging torso or lifting far above shoulders.'],
'Neutral-Grip Dumbbell Floor Press':['Lie on floor with knees bent and palms facing in.','Lower until upper arms gently touch floor.','Press up while keeping elbows comfortably tucked.','Slamming elbows onto floor.'],
'Dumbbell Romanian Deadlift':['Stand tall with soft knees and weights near thighs.','Push hips backward as dumbbells slide near legs.','Stand by driving hips forward and squeezing glutes.','Rounding back or turning it into a squat.'],
'Weighted Crunch':['Hold a manageable weight against chest.','Curl ribs toward pelvis through a short range.','Lower slowly while keeping neck relaxed.','Pulling on neck or using a large sit-up motion.'],
'Side Plank':['Place elbow directly under shoulder.','Stack hips and lift body into a straight line.','Breathe steadily and keep hips from rotating.','Allowing top hip to roll forward or sag.']};
let client,account,selected,book,etag,step=0,workout='A',draft=Array.from({length:9},()=>({weight:'',reps:'',rir:''}));
const today=new Date();$('date').value=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
$('client').value=localStorage.getItem('workoutClientId')||'';
function init(){const id=$('client').value.trim();if(!/^[0-9a-f-]{36}$/i.test(id))throw Error('Enter the Microsoft application (client) ID from your app registration.');if(typeof msal==='undefined')throw Error('Microsoft sign-in library did not load. Check your internet connection or browser content blocking, then refresh.');localStorage.setItem('workoutClientId',id);client=new msal.PublicClientApplication({auth:{clientId:id,authority:'https://login.microsoftonline.com/consumers',redirectUri:location.origin+location.pathname},cache:{cacheLocation:'sessionStorage'}});account=client.getAllAccounts()[0];}
async function token(){if(!client)init();if(!account){const r=await client.loginPopup({scopes:['Files.ReadWrite','User.Read']});account=r.account}try{return (await client.acquireTokenSilent({account,scopes:['Files.ReadWrite']})).accessToken}catch{return (await client.acquireTokenPopup({account,scopes:['Files.ReadWrite']})).accessToken}}
async function graph(path,options={}){const t=await token();const res=await fetch('https://graph.microsoft.com/v1.0'+path,{...options,headers:{Authorization:'Bearer '+t,...options.headers}});if(!res.ok)throw Error('Microsoft OneDrive error '+res.status+': '+(await res.text()).slice(0,350));return res}
async function listFiles(){
  status('Looking for Workout_Master.xlsx in OneDrive…');
  const exact='/me/drive/root:/Documents/Medical/Workout_Master.xlsx?$select=id,name,eTag,parentReference';
  let files=[], exactError='';
  try {
    const r=await graph(exact);
    const file=await r.json();
    if(file.id && file.name==='Workout_Master.xlsx') files=[file];
  } catch(e) { exactError=e.message; }
  if(!files.length){
    // OneDrive Personal can have a different cloud folder structure than the PC's synced path.
    // Search by filename, then let the user select the correct file if duplicates exist.
    try {
      let url="/me/drive/root/search(q='Workout_Master.xlsx')?$select=id,name,eTag,parentReference,file&$top=100";
      for(let page=0;url && page<10;page++){
        const r=await graph(url);
        const result=await r.json();
        files.push(...(result.value||[]).filter(f=>f.name?.toLowerCase()==='workout_master.xlsx' && f.file));
        const next=result['@odata.nextLink'];
        url=next ? next.replace(/^https:\/\/graph\.microsoft\.com\/v1\.0/,'') : null;
      }
    } catch(e){
      throw Error('Unable to search OneDrive. '+e.message+(exactError?' Exact-path result: '+exactError:''));
    }
  }
  files=[...new Map(files.map(f=>[f.id,f])).values()];
  if(!files.length)throw Error('Workout_Master.xlsx was not found in this Microsoft account. Check that you signed in with the OneDrive Personal account containing the workbook. Exact-path result: '+(exactError||'No matching file'));
  window.foundFiles=files;
  $('files').innerHTML='';
  for(let i=0;i<files.length;i++){
    const f=files[i];
    const option=document.createElement('option');
    option.value=String(i);
    option.textContent=f.name+' — '+(f.parentReference?.path||'OneDrive folder');
    $('files').appendChild(option);
  }
  $('files').value='0';
  status(files.length===1?'Found Workout_Master.xlsx. Click Use selected workbook.':'Found '+files.length+' matching workbooks. Select the correct folder, then click Use selected workbook.');
}
$('signin').onclick=async()=>{try{await token();status('Microsoft sign-in successful. Now find your workbook.')}catch(e){status(e.message)}};
$('choose').onclick=async()=>{try{await listFiles()}catch(e){status(e.message)}};
$('usefile').onclick=async()=>{try{const i=$('files').value;if(i==='')throw Error('Select a workbook first.');selected=window.foundFiles[+i];sessionStorage.setItem('workoutFile',JSON.stringify(selected));$('chosen').textContent='Master: '+selected.name;await loadBook();status('Master workbook loaded. Ready to start workout.')}catch(e){status(e.message)}};
async function loadBook(){if(!selected)throw Error('Choose your OneDrive master workbook first.');const r=await graph(`/me/drive/items/${encodeURIComponent(selected.id)}/content`);const bytes=await r.arrayBuffer();book=new ExcelJS.Workbook();await book.xlsx.load(bytes);if(!book.getWorksheet('Sheet1'))throw Error('Master workbook does not contain Sheet1.');const m=await(await graph(`/me/drive/items/${encodeURIComponent(selected.id)}?$select=eTag,name`)).json();etag=m.eTag;}
function saveDraft(){draft[step]={weight:$('weight').value,reps:$('reps').value,rir:$('rir').value}}
function latest(ws,col,row){let best=null;for(let r=row;r<row+16;r++){const d=ws.getCell(`${col}${r}`).value;if(d!==null&&d!==undefined&&d!==''){best=r}}return best}
function show(){const n=names[workout][step],data=draft[step];$('entry').classList.remove('hidden');$('finish').classList.add('hidden');$('step').textContent=`WORKOUT ${workout} – EXERCISE ${step+1} OF 9`;$('exercise').textContent=n;$('drawing').innerHTML=sketch(n);$('anatomy').innerHTML=anatomy(n);$('cue').innerHTML='<ol>'+tips[n].slice(0,3).map(t=>'<li>'+t+'</li>').join('')+'</ol>';$('avoid').textContent=tips[n][3];$('muscles').textContent='Muscles: '+cues[n][0];$('weight').value=data.weight;$('reps').value=data.reps;$('rir').value=data.rir;const ws=book?.getWorksheet('Sheet1');let text='Previous: —';if(ws){const row=latest(ws,workout==='A'?'B':'H',rows[step]);if(row!==null)text=`Previous: ${ws.getCell(`${workout==='A'?'D':'J'}${row}`).value??'—'} lb · ${ws.getCell(`${workout==='A'?'E':'K'}${row}`).value??'—'} reps · ${ws.getCell(`${workout==='A'?'F':'L'}${row}`).value??'—'} RIR`}$('previous').textContent=text;$('prev').disabled=step===0;$('next').textContent=step===8?'Finish exercises':'Next exercise'}
$('start').onclick=async()=>{try{workout=$('workout').value;if(!selected){const saved=sessionStorage.getItem('workoutFile');if(saved)selected=JSON.parse(saved)}await loadBook();draft=Array.from({length:9},()=>({weight:'',reps:'',rir:''}));step=0;show();status('Workout started. Results will save only when you tap Save to OneDrive.')}catch(e){status(e.message)}};
$('prev').onclick=()=>{saveDraft();step=Math.max(0,step-1);show()};$('next').onclick=()=>{saveDraft();if(step===8){$('entry').classList.add('hidden');$('finish').classList.remove('hidden')}else{step++;show()}};
function cloneStyle(src,dst){dst.style=JSON.parse(JSON.stringify(src.style||{}));dst.numFmt=src.numFmt}
function insertRow(ws,base,col){let r=base;while(r<base+16&&ws.getCell(`${col}${r}`).value!==null&&ws.getCell(`${col}${r}`).value!==undefined&&ws.getCell(`${col}${r}`).value!=='')r++;if(r>=base+16)throw Error(`Exercise block at row ${base} is full. Expand the workbook block before saving.`);return r}
async function commit(){if(!selected||!book)throw Error('Master workbook is not loaded.');const minutes=Number($('minutes').value);if(!Number.isFinite(minutes)||minutes<=0)throw Error('Enter workout time in minutes.');if(draft.some(d=>!d.reps.trim()))throw Error('Please enter reps or seconds for all nine exercises.');const date=$('date').value;if(!/^\d{4}-\d\d-\d\d$/.test(date))throw Error('Choose a valid workout date.');const current=await(await graph(`/me/drive/items/${encodeURIComponent(selected.id)}?$select=eTag`)).json();if(current.eTag!==etag)throw Error('The workbook changed in OneDrive since it was loaded. Nothing was overwritten. Restart the workout to reload the latest version, then re-enter results.');const ws=book.getWorksheet('Sheet1');const dc=workout==='A'?'B':'H',wc=workout==='A'?'D':'J',rc=workout==='A'?'E':'K',ic=workout==='A'?'F':'L';for(let i=0;i<10;i++){const r=insertRow(ws,rows[i],dc);for(const c of [dc,wc,rc,ic])if(r>rows[i])cloneStyle(ws.getCell(`${c}${r-1}`),ws.getCell(`${c}${r}`));ws.getCell(`${dc}${r}`).value=new Date(date+'T12:00:00');ws.getCell(`${dc}${r}`).numFmt='m/d/yyyy';if(i===9){ws.getCell(`${rc}${r}`).value=minutes;continue}const d=draft[i];ws.getCell(`${wc}${r}`).value=d.weight.trim()&&Number.isFinite(Number(d.weight))?Number(d.weight):d.weight.trim();ws.getCell(`${rc}${r}`).value=d.reps.trim();ws.getCell(`${ic}${r}`).value=d.rir.trim()===''?null:Number(d.rir)}const bytes=await book.xlsx.writeBuffer();const response=await graph(`/me/drive/items/${encodeURIComponent(selected.id)}/content`,{method:'PUT',headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','If-Match':etag},body:bytes});const updated=await response.json();etag=updated.eTag||etag;status(`Saved Workout ${workout} for ${date} to ${selected.name} on OneDrive. Verify the new entries in Excel.`);$('finish').classList.add('hidden');$('entry').classList.add('hidden')}
$('save').onclick=async()=>{const b=$('save');b.disabled=true;status('Checking and saving to OneDrive…');try{await commit()}catch(e){status('Not saved: '+e.message)}finally{b.disabled=false}};
try{const saved=sessionStorage.getItem('workoutFile');if(saved){selected=JSON.parse(saved);$('chosen').textContent='Selected master: '+selected.name}}catch{}

$('backfromfinish').onclick=()=>{step=8;show()};
