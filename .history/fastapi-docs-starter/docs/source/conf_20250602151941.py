# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import os
import sys
sys.path.insert(0, os.path.abspath('../..'))

project = 'FastAPI Documentation Example'
copyright = '2025, Dom Caracappa'
author = 'Dom Caracappa'
release = '1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'myst_parser',
    'sphinx.ext.autodoc',
]

templates_path = ['_templates']
exclude_patterns = []




# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']

# -- MyST Parser for Markdown -----------------
extensions = [
    'myst_parser',
    'sphinx.ext.autodoc',  # For pulling in docstrings
]

# Enable auto-documentation
autodoc_default_options = {
    'members': True,
    'undoc-members': True,
}

# If you want to document .md files:
source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}

# Set the master document
master_doc = 'index'
