import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const SpreadsheetGrid = () => {
  const { cells, updateCell } = useSpreadsheetStore();
  const gridSize = 1000;

  const handleInputChange = (e, id) => {
    updateCell(id, e.target.innerText);
  };

  const renderCells = () => {
    const cellsArray = [];
    for (let i = 0; i < gridSize; i++) {
      const cellId = `cell-${i}`;
      cellsArray.push(
        <div
          key={cellId}
          className="border p-2 min-w-[100px] min-h-[30px] text-left"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => handleInputChange(e, cellId)}
        >
          {cells[cellId] || ''}
        </div>
      );
    }
    return cellsArray;
  };

  return (
    <div className="grid grid-cols-10 gap-1">
      {renderCells()}
    </div>
  );
};

export default SpreadsheetGrid;
