# Configuration file for the Sphinx documentation builder.
# For the full list of built-in configuration values, see:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import os
import sys
# Add the parent directory (root of your project) to sys.path
sys.path.insert(0, os.path.abspath('../..'))

# -- Project information -----------------------------------------------------

project = 'FastAPI Docs Example'
copyright = '2025, Dom Caracappa'
author = 'Dom Caracappa'
release = '1.0'

# -- General configuration ---------------------------------------------------

extensions = [
    'myst_parser',            # Enable Markdown support via MyST
    'sphinx.ext.autodoc',     # Auto-documentation for Python docstrings
    'sphinx.ext.napoleon',    # Support for Google-style & NumPy-style docstrings
]

# Paths for custom templates
templates_path = ['_templates']

# Patterns to exclude from build
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------

html_theme = 'alabaster'       # Choose your theme, e.g., 'alabaster', 'sphinx_rtd_theme'
html_static_path = ['_static'] # Static files (CSS, JS, etc.)

# -- Autodoc configuration ---------------------------------------------------

autodoc_default_options = {
    'members': True,         # Include documented members
    'undoc-members': True,   # Include undocumented members (helpful in dev)
}

# -- MyST Parser for Markdown files -----------------------------------------

# Let Sphinx recognize both reStructuredText and Markdown as sources
source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}

# Define the master document (entry point)
master_doc = 'index'


html_static_path = ['_static']

def setup(app):
    app.add_css_file('custom.css')


# -- Notes --------------------------------------------------------------------
# - The sys.path.insert call ensures Sphinx can find your FastAPI project.
# - The 'myst_parser' extension is essential for Markdown-based docs.
# - The 'autodoc' and 'napoleon' extensions let you generate API docs
#   from your Python code, including support for docstring formats.
# - To customize the theme further, consider installing and using:
#     pip install sphinx-rtd-theme
#     html_theme = 'sphinx_rtd_theme'
