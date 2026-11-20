
import { useState, useEffect } from 'react';
import { INotebookContent } from '@jupyterlab/nbformat';
import { Box } from '@primer/react';
import { OutputViewer } from '@datalayer/jupyter-react/lib/components/viewer/output/OutputViewer';
import { IDashboardLayout, IDashboardCell } from '../types/DashboardTypes';
import { getDashboardCell } from '../specs/DashboardSpecs';

export const SimpleLayout = (props: SimpleLayout.IConfig): JSX.Element => {
  const { notebook, layout, adaptPlotly } = props;
  const [dashCells, setDashCells] = useState<Array<IDashboardCell>>();
  useEffect(() => {
    const dashCells = Object.values((layout as IDashboardLayout).outputs)[0];
    setDashCells(dashCells);
  }, [notebook, layout]);
  return (
    dashCells
    ? (
      <>
        { dashCells.map((dashCell, index) => {
          const cell = getDashboardCell(dashCell.cellId, notebook);
          return (
            cell
            ?
              <Box
                sx={{
                  position: "fixed",
                  top: dashCell.pos.top + 300,
                  left: dashCell.pos.left,
                  width: dashCell.pos.width + 100,
                  height: dashCell.pos.height,
                }}
              key={index}
              >
                <OutputViewer cell={cell} adaptPlotly={adaptPlotly} />
              </Box>
            :
              <></>
            )
          })
        }
      </>
    )
    : <></>
  )
}

export namespace SimpleLayout {
  export type IConfig = {
    notebook: INotebookContent;
    layout: IDashboardLayout;
    adaptPlotly: boolean;
  }
}

export default SimpleLayout;
