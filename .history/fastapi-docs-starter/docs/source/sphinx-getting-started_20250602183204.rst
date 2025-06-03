Sphinx + reStructuredText: Getting Started
==========================================

Sphinx is a **powerful** documentation generator, and reStructuredText (reST) is its markup language of choice.

This page will help you **get started** using Sphinx with reST.

What You'll learn
-----------------

- How to install Sphinx
- Basic project structure
- Creating and writing 
- Building your documentation

Installing Sphinx
-----------------

Inside your project's Python virtual environment, run:

.. code-block:: bash

    pip install sphinx

Check that the install:

.. code-block:: bash

    sphinx-quickstart --version

Basic Project structure
-----------------------

A typical Sphinx documentation project looks like:

.. code-block:: text

   docs/
   ├── build/          # Output files (HTML, PDF, etc.)
   ├── source/         # reST source files
   │   ├── index.rst   # Main landing page
   │   ├── conf.py     # Sphinx configuration file
   │   └── usage.rst   # Example page
   └── Makefile        # Build commands (e.g., make html)

Writing Your '.rst' files
-------------------------

Use reStructuredText to create your pages:

- **Titles and Headings:**

  .. code-block:: rst

    My Page Title
    =============

- **Emphasis**
  
  - *italic* or **bold**

- **Links:**
  
  ..code-block:: rst

    `Sphinx Docs <https://www.sphinx-doc.org>`_

Building the Docs
-----------------

From the `docs` directory, run:

.. code-block:: bash

    make html

The HTML output will be in the `docs/build/html/` folder.
Open `index.html` in your browser!

Further Reading
---------------

- `Sphinx Documentation <https://www.sphinx-doc.org/en/master>`_
- `reStructuredText Primer <https://docutils.sourceforge.io/docs/user/rst/quickstart.html>`_

---

Adding to ``index.rst``
------------------------
Update the ``.. toctree::`` in your ``index.rst`` like this:

.. code-block:: restructuredtext

   .. toctree::
      :maxdepth: 2
      :caption: Contents:

      usage
      api
      sphinx-getting-started