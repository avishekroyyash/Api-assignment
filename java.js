//button toggle function or selecting
let allIssuData = [];
const allBtn = document.getElementById('all-btn')
const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('closed-btn')
const displayAllissu = document.getElementById('all-issu-display')
const spiner = document.getElementById('spiner-add')
let cardLength = document.getElementById('length-card')
let currentId = 'all-btn'
let count=0;

//spinner function 
function spainControl(value){
  if(value == true){
  spiner.classList.remove('hidden')
  displayAllissu.classList.add('hidden')
  }
  else{
    spiner.classList.add('hidden')
  displayAllissu.classList.remove('hidden')
  }
}

//btn toggle and function call 
function toggle(id){
  currentId = id

  allBtn.classList.remove('btn-primary')
  openBtn.classList.remove('btn-primary')
  closeBtn.classList.remove('btn-primary')

  allBtn.classList.add('hover:bg-indigo-500')
  openBtn.classList.add('hover:bg-indigo-500')
  closeBtn.classList.add('hover:bg-indigo-500')

  const matchBtn =document.getElementById(id)
  matchBtn.classList.add('btn-primary')
  matchBtn.classList.remove('hover:bg-indigo-500')

  if(currentId == 'all-btn'){
     spainControl(true)
  allIssuDisplay(allIssuData);

  cardLength.textContent = allIssuData.length
 //displayAllissu.classList.remove('hidden')
  //console.log('all btn is clicked')
  }
  else if(currentId == 'open-btn'){
       spainControl(true)
    const openCard = allIssuData.filter(data => data.status == 'open')
  
    allIssuDisplay(openCard)
       cardLength.textContent = openCard.length
     // cardLength = count;
     //displayAllOpenissu.classList.remove('hidden')
     //console.log('all open btn is clicked')
  }
 else{
     spainControl(true)
   const closedCard = allIssuData.filter(data => data.status == 'closed')
    allIssuDisplay(closedCard)
       cardLength.textContent = closedCard.length
     // cardLength = count;
    // console.log('all closed btn is clicked')
 }
}

//All card load Api
async function allIssu(){
  spainControl(true)
    url='https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data.data)
    allIssuData =data.data
    allIssuDisplay(data.data)
   // openCard(data.data)
}
//All card display Api
const allIssuDisplay = (allissues)=>{
//console.log(allissues)
  displayAllissu.innerHTML=" "
allissues.forEach(issu =>{
    //this is for labels 
     const showLevel=issu.labels.map(label=>{
        if(label=='bug'){
       return ` <p class=" bg-red-100 text-red-500 rounded-3xl px-5 py-1 text-[10px]"><i class="fa-solid fa-bug"></i> ${label.toUpperCase()}</p>`
        }
        else if(label=='help wanted'){
        return `<p  class=" bg-[#FDE68A] text-[#D97706] rounded-3xl px-3 py-1 text-[10px]"><i class="fa-solid fa-life-ring"></i> ${label.toUpperCase()}</p>`
        }
        else{
          return ` <p  class=" bg-green-100 text-green-500 rounded-3xl px-3 py-1 text-[8px]"><i class="fa-solid fa-star-of-david"></i> ${label.toUpperCase()}</p>`
        }
     }).join("")
     //this is for priority  
     let showPriority = ""
        if(issu.priority=='high'){
         showPriority = `<button class="btn bg-red-100 text-red-500 rounded-3xl ">${issu.priority.toUpperCase()}</button>`
    }
    else if(issu.priority == 'medium'){
        showPriority =  `<button class="btn bg-[#FDE68A] text-[#D97706] rounded-3xl ">${issu.priority.toUpperCase()}</button>`
    }
    else {
            showPriority =  ` <button class="btn bg-gray-100 text-gray-500 rounded-3xl ">${issu.priority.toUpperCase()}</button> `
    }
   // this is for status
   let borderShow = " "
    if(issu.status=='open'){
     borderShow =`border-t-3 border-green-500` 
    }
    else{
     borderShow =`border-t-3 border-indigo-500`
    }
  const div = document.createElement('div')
  div.innerHTML=`
   <div onclick="modalDataLoad('${issu.id}')" class="px-3 py-6 shadow-md rounded-2xl space-y-3 ${borderShow}">
     <div class="flex justify-between items-center">
        <div>
        ${issu.status == 'open' ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt=""> ` }
             
        </div>
        <div>
          
       ${showPriority}

        </div>
     </div>
     <div>
        <h1 class="font-semibold text-[14px]">${issu.title}</h1>
        <p class="text-[#64748B] text-[12px] line-clamp-2">${issu.description}</p>
     </div>
     <div class="flex justify-start items-center gap-3">
         
       ${showLevel}
        
     </div>
     <div class="text-[#64748b6b]">
            <hr>
     </div>
      <p class="text-[#64748B]">#1 by ${issu.author}</p>
      <p class="text-[#64748B]">${new Date (issu.createdAt).toLocaleDateString()
      
      }</p>
     </div>
`
displayAllissu.appendChild(div)
})
  spainControl(false)
}

// fetch modal api
async function modalDataLoad(id){
  const res= await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
  const data = await res.json();
  // console.log(data.data)
  modalDataDisplay(data.data)
}

const modalDataDisplay=(modalData)=>{
const modalShow = document.getElementById('my_modal_5');
//this is for level 
 const label=modalData.labels.map(item =>{
   if(item=='bug'){
       return ` <p class=" bg-red-100 text-red-500 rounded-3xl px-5 py-1 text-[14px]"><i class="fa-solid fa-bug"></i> ${item.toUpperCase()}</p>`
        }
        else if(item=='help wanted'){
        return `<p  class=" bg-[#FDE68A] text-[#D97706] rounded-3xl px-3 py-1 text-[14px]"><i class="fa-solid fa-life-ring"></i> ${item.toUpperCase()}</p>`
        }
        else{
          return ` <p  class=" bg-green-100 text-green-500 rounded-3xl px-3 py-1 text-[14px]"><i class="fa-solid fa-star-of-david"></i> ${item.toUpperCase()}</p>`
        }
     }).join("")

//this is for priority  
     let showPriority = ""
        if(modalData.priority=='high'){
         showPriority = `<button class="btn bg-red-500 text-white rounded-3xl ">${modalData.priority.toUpperCase()}</button>`
    }
    else if(modalData.priority == 'medium'){
        showPriority =  `<button class="btn bg-[#e3b708] text-white rounded-3xl ">${modalData.priority.toUpperCase()}</button>`
    }
    else {
            showPriority =  ` <button class="btn bg-gray-500 text-white rounded-3xl ">${modalData.priority.toUpperCase()}</button> `
    }

    // this is for status

   let borderShow = " "
    if(modalData.status=='open'){
     borderShow =` <button class="btn btn-success rounded-3xl text-white">${modalData.status}</button>` 
    }
    else{
     borderShow =`<button class="btn btn-secondary rounded-3xl text-white">${modalData.status}</button>`
    }
modalShow.innerHTML=`
<div class="modal-box border-2 space-y-4 max-w-[700px]">
    <h3 class="text-[24px] text-lg font-bold"> ${modalData.title} </h3>
    <div class="flex justify-start gap-2 items-center">
   <p> ${borderShow} </p>
     <p class="text-[#64748B] text-[12px] "><i class="fa-solid fa-circle"></i>  Opened by ${modalData.author} </p>
      <p class="text-[#64748B] text-[12px]"><i class="fa-solid fa-circle"></i> ${new Date(modalData.updatedAt).toLocaleDateString() }</p>
    </div>
     <div class="flex justify-start items-center gap-3">
        ${label}
     </div>
    <p class="text-[#64748B] text-[16px] py-4">${modalData.description} </p>
    <div class="flex items-center justify-between ">
    <div>
        <p class="text-[#64748B] text-[16px] ">Assignee:</p>
        <p class="font-semibold text-[16px] ">${modalData.assignee ? modalData.assignee : 'there are not assignee' }</p>
    </div>
    <div class="pr-40 ">
        <p class="text-[#64748B] text-[16px]">Priority:</p>
      <p ${showPriority}</p>
    </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog>
      

    </section>
`
modalShow.showModal()
}

modalDataLoad();




//click search Btn
const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click',function(){
  const inputSearch = document.getElementById('input-search')
  const inputSearchText = inputSearch.value.trim().toLowerCase()
  //console.log(inputSearchText)
    spainControl(true)
 fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputSearchText}`)
 .then(res => res.json())
 .then(data => {
  let filterData = data.data
  //  let showSearchData = filterData.filter(item => 
  //   item.data.toLowerCase().includes(inputSearchText))
    allIssuDisplay(filterData)
 })

})





allIssu()