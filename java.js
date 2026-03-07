async function allIssu(){
    url='https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data.data)
    allIssuDisplay(data.data)
}

const allIssuDisplay = (allissues)=>{
//console.log(allissues)
  const displayAllissu = document.getElementById('all-issu-display')
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
   <div class="px-3 py-6 shadow-md rounded-2xl space-y-3 ${borderShow}">
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
}

allIssu()