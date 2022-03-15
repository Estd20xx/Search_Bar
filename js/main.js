// -------------------BY: Sushant Khadka-----------
const search = () => {       //----Making the function from the input area------
    let Input = document.getElementById("search").value.toUpperCase();   //---fetching the value from input field----
    let Table = document.getElementById("table");          //----- Targetting the Table----
    let Table_Row = Table.getElementsByTagName("tr");       //---Targetting the Table_row of the table----
    for (var counter = 0; counter < Table_Row.length; counter++) {  //--- making the for loop for all the Table_row(tr)-----
        let Table_data = Table_Row[counter].getElementsByTagName("td")[1];   //---Gainging the data of the Table_data(td)----
        if (Table_data) {   //----checking the condition------
            let Final_Text = Table_data.textContent;    //----Converting the Table_data into the plain text-----
            if (Final_Text.toUpperCase().indexOf(Input) > -1) {   //---- checking the input value and our Data----
                Table_Row[counter].style.display = "";    //---- showing the Data-----
            } else {
                Table_Row[counter].style.display = "none";    //--- Nothing tp show----
            }
        }
    }
}