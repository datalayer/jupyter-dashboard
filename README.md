[![Datalayer](https://assets.datalayer.tech/datalayer-25.svg)](https://datalayer.io)

[![Become a Sponsor](https://img.shields.io/static/v1?label=Become%20a%20Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat&color=1ABC9C)](https://github.com/sponsors/datalayer)

# 🪐 🏄 Jupyter Dashboard

> Create and publish Dashboard from Jupyter.

A [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) dashboard editor for JupyterLab.

<div align="center" style="text-align: center">
  <img alt="Jupyter Dashboard Editor" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyter-dashboard-editor.gif" />
</div>

## To Do

- [ ] Associate one .dash with many .ipynb
- [ ] Bokeh Support
- [ ] Configurable Notebook Toolbar
- [ ] Configurable S3 Bucket
- [ ] Custom Layout
- [ ] Home page
- [ ] IPyWidgets with lite Kernels
- [ ] Input and Outputs Cells Support
- [ ] More granular Plugins
- [ ] Notebook Renaming
- [ ] Panel with lite Kernels
- [ ] Permissions
- [ ] RenderApp based on [grid-layout](https://github.com/react-grid-layout/react-grid-layout)
- [ ] RenderApp with IPyWidgets support
- [ ] Tracking system (like Ggoogle Analytics) on the publication
- [ ] Versioning

## Develop

```bash
yarn
yarn build
# open http://localhost:3063
# open http://localhost:8686/api/jupyter/lab?token=60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6
yarn start
```

```bash
pip install -e .[test]
jupyter labextension develop . --overwrite
jupyter labextension list
jupyter server extension list
# open http://localhost:8686/api/jupyter/lab?token=60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6
yarn jupyterlab
```
