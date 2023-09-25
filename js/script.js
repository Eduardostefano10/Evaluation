
        const addRowAButton = document.getElementById("addRowA");
        const addColumnAButton = document.getElementById("addColumnA");
        const addRowBButton = document.getElementById("addRowB");
        const addColumnBButton = document.getElementById("addColumnB");
        const calculateButton = document.getElementById("calculate");
        const matrixA = document.getElementById("matrixA");
        const matrixB = document.getElementById("matrixB");
        const resultTable = document.getElementById("result-table");
        const clearMatrixAButton = document.getElementById("clearMatrixA");
        const clearMatrixBButton = document.getElementById("clearMatrixB");

        addRowAButton.addEventListener("click", () => addRow(matrixA));
        addColumnAButton.addEventListener("click", () => addColumn(matrixA));
        addRowBButton.addEventListener("click", () => addRow(matrixB));
        addColumnBButton.addEventListener("click", () => addColumn(matrixB));
        calculateButton.addEventListener("click", multiplyMatrices);
        clearMatrixAButton.addEventListener("click", clearMatrixA);
        clearMatrixBButton.addEventListener("click", clearMatrixB);

        function addRow(matrix) {
            const newRow = document.createElement("tr");
            const columns = matrix.rows[0].cells.length;
            for (let i = 0; i < columns; i++) {
                const cell = document.createElement("td");
                cell.innerHTML = '<input type="number">';
                newRow.appendChild(cell);
            }
            matrix.appendChild(newRow);
        }

        function addColumn(matrix) {
            const rows = matrix.rows.length;
            for (let i = 0; i < rows; i++) {
                const cell = document.createElement("td");
                cell.innerHTML = '<input type="number">';
                matrix.rows[i].appendChild(cell);
            }
        }

        function multiplyMatrices() {
            const matrixARows = matrixA.rows.length;
            const matrixACols = matrixA.rows[0].cells.length;
            const matrixBRows = matrixB.rows.length;
            const matrixBCols = matrixB.rows[0].cells.length;

            if (matrixACols !== matrixBRows) {
                alert("El número de columnas en la Matriz A debe ser igual al número de filas en la Matriz B.");
                return;
            }

            const result = [];

            for (let i = 0; i < matrixARows; i++) {
                const row = [];
                for (let j = 0; j < matrixBCols; j++) {
                    let sum = 0;
                    for (let k = 0; k < matrixACols; k++) {
                        const inputA = matrixA.rows[i].cells[k].querySelector("input");
                        const inputB = matrixB.rows[k].cells[j].querySelector("input");
                        sum += parseFloat(inputA.value) * parseFloat(inputB.value);
                    }
                    row.push(sum);
                }
                result.push(row);
            }

            displayResult(result);
        }

        function displayResult(result) {
            resultTable.innerHTML = "";
            for (const row of result) {
                const newRow = document.createElement("tr");
                for (const value of row) {
                    const cell = document.createElement("td");
                    cell.textContent = value;
                    newRow.appendChild(cell);
                }
                resultTable.appendChild(newRow);
            }
        }
        function displayResult(result) {
            const resultDisplay = document.getElementById("result-display");
            const resultTable = document.getElementById("result-table");
            
            resultTable.innerHTML = ""; // Limpia la tabla de resultados
            
            for (const row of result) {
              const newRow = document.createElement("tr");
              for (const value of row) {
                const cell = document.createElement("td");
                cell.textContent = value;
                newRow.appendChild(cell);
              }
              resultTable.appendChild(newRow);
            }
          
            resultDisplay.style.display = "block"; // Muestra el resultado en la página
          }
          function clearMatrixA() {
            const inputs = matrixA.querySelectorAll("input[type='number']");
            inputs.forEach((input) => {
                input.value = "";
            });
        }
        
        function clearMatrixB() {
            const inputs = matrixB.querySelectorAll("input[type='number']");
            inputs.forEach((input) => {
                input.value = "";
            });
        }