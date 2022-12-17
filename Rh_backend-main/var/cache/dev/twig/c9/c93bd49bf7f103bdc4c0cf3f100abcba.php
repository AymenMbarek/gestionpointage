<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @VichUploader/Form/fields.html.twig */
class __TwigTemplate_41f6fd0ae0c2295ca5804445e8152d81 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'vich_file_row' => [$this, 'block_vich_file_row'],
            'vich_file_widget' => [$this, 'block_vich_file_widget'],
            'vich_image_row' => [$this, 'block_vich_image_row'],
            'vich_image_widget' => [$this, 'block_vich_image_widget'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@VichUploader/Form/fields.html.twig"));

        // line 1
        $this->displayBlock('vich_file_row', $context, $blocks);
        // line 6
        $this->displayBlock('vich_file_widget', $context, $blocks);
        // line 24
        $this->displayBlock('vich_image_row', $context, $blocks);
        // line 29
        $this->displayBlock('vich_image_widget', $context, $blocks);
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 1
    public function block_vich_file_row($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "vich_file_row"));

        // line 2
        $context["force_error"] = true;
        // line 3
        $this->displayBlock("form_row", $context, $blocks);
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 6
    public function block_vich_file_widget($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "vich_file_widget"));

        // line 7
        echo "<div class=\"vich-file\">";
        // line 8
        if ((twig_length_filter($this->env, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 8, $this->source); })())) > 0)) {
            // line 9
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 9, $this->source); })()), ["class" => twig_trim_filter((((twig_get_attribute($this->env, $this->source, ($context["attr"] ?? null), "class", [], "any", true, true, false, 9)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, ($context["attr"] ?? null), "class", [], "any", false, false, false, 9), "")) : ("")) . " is-invalid"))]);
        }
        // line 11
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 11, $this->source); })()), "file", [], "any", false, false, false, 11), 'widget', ["attr" => (isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 11, $this->source); })())]);
        // line 12
        if (twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "delete", [], "any", true, true, false, 12)) {
            // line 13
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 13, $this->source); })()), "delete", [], "any", false, false, false, 13), 'row');
        }
        // line 16
        if ((isset($context["download_uri"]) || array_key_exists("download_uri", $context) ? $context["download_uri"] : (function () { throw new RuntimeError('Variable "download_uri" does not exist.', 16, $this->source); })())) {
            // line 17
            echo "<a href=\"";
            echo twig_escape_filter($this->env, ((((isset($context["asset_helper"]) || array_key_exists("asset_helper", $context) ? $context["asset_helper"] : (function () { throw new RuntimeError('Variable "asset_helper" does not exist.', 17, $this->source); })()) === true)) ? ($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl((isset($context["download_uri"]) || array_key_exists("download_uri", $context) ? $context["download_uri"] : (function () { throw new RuntimeError('Variable "download_uri" does not exist.', 17, $this->source); })()))) : ((isset($context["download_uri"]) || array_key_exists("download_uri", $context) ? $context["download_uri"] : (function () { throw new RuntimeError('Variable "download_uri" does not exist.', 17, $this->source); })()))), "html", null, true);
            echo "\" download>
                ";
            // line 18
            echo twig_escape_filter($this->env, ((((isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 18, $this->source); })()) === false)) ? ((isset($context["download_label"]) || array_key_exists("download_label", $context) ? $context["download_label"] : (function () { throw new RuntimeError('Variable "download_label" does not exist.', 18, $this->source); })())) : ($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans((isset($context["download_label"]) || array_key_exists("download_label", $context) ? $context["download_label"] : (function () { throw new RuntimeError('Variable "download_label" does not exist.', 18, $this->source); })()), [], (isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 18, $this->source); })())))), "html", null, true);
            echo "
            </a>";
        }
        // line 21
        echo "</div>";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 24
    public function block_vich_image_row($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "vich_image_row"));

        // line 25
        $context["force_error"] = true;
        // line 26
        $this->displayBlock("form_row", $context, $blocks);
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 29
    public function block_vich_image_widget($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "vich_image_widget"));

        // line 30
        echo "<div class=\"vich-image\">";
        // line 31
        if ((twig_length_filter($this->env, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 31, $this->source); })())) > 0)) {
            // line 32
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 32, $this->source); })()), ["class" => twig_trim_filter((((twig_get_attribute($this->env, $this->source, ($context["attr"] ?? null), "class", [], "any", true, true, false, 32)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, ($context["attr"] ?? null), "class", [], "any", false, false, false, 32), "")) : ("")) . " is-invalid"))]);
        }
        // line 34
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 34, $this->source); })()), "file", [], "any", false, false, false, 34), 'widget', ["attr" => (isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 34, $this->source); })())]);
        // line 35
        if (twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "delete", [], "any", true, true, false, 35)) {
            // line 36
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 36, $this->source); })()), "delete", [], "any", false, false, false, 36), 'row');
        }
        // line 39
        if ((isset($context["image_uri"]) || array_key_exists("image_uri", $context) ? $context["image_uri"] : (function () { throw new RuntimeError('Variable "image_uri" does not exist.', 39, $this->source); })())) {
            // line 40
            echo "<a href=\"";
            echo twig_escape_filter($this->env, ((((isset($context["asset_helper"]) || array_key_exists("asset_helper", $context) ? $context["asset_helper"] : (function () { throw new RuntimeError('Variable "asset_helper" does not exist.', 40, $this->source); })()) === true)) ? ($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl((isset($context["image_uri"]) || array_key_exists("image_uri", $context) ? $context["image_uri"] : (function () { throw new RuntimeError('Variable "image_uri" does not exist.', 40, $this->source); })()))) : ((isset($context["image_uri"]) || array_key_exists("image_uri", $context) ? $context["image_uri"] : (function () { throw new RuntimeError('Variable "image_uri" does not exist.', 40, $this->source); })()))), "html", null, true);
            echo "\" download>
                <img src=\"";
            // line 41
            echo twig_escape_filter($this->env, ((((isset($context["asset_helper"]) || array_key_exists("asset_helper", $context) ? $context["asset_helper"] : (function () { throw new RuntimeError('Variable "asset_helper" does not exist.', 41, $this->source); })()) === true)) ? ($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl((isset($context["image_uri"]) || array_key_exists("image_uri", $context) ? $context["image_uri"] : (function () { throw new RuntimeError('Variable "image_uri" does not exist.', 41, $this->source); })()))) : ((isset($context["image_uri"]) || array_key_exists("image_uri", $context) ? $context["image_uri"] : (function () { throw new RuntimeError('Variable "image_uri" does not exist.', 41, $this->source); })()))), "html", null, true);
            echo "\" alt=\"\" />
            </a>";
        }
        // line 44
        if ((isset($context["download_uri"]) || array_key_exists("download_uri", $context) ? $context["download_uri"] : (function () { throw new RuntimeError('Variable "download_uri" does not exist.', 44, $this->source); })())) {
            // line 45
            echo "<a href=\"";
            echo twig_escape_filter($this->env, ((((isset($context["asset_helper"]) || array_key_exists("asset_helper", $context) ? $context["asset_helper"] : (function () { throw new RuntimeError('Variable "asset_helper" does not exist.', 45, $this->source); })()) === true)) ? ($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl((isset($context["download_uri"]) || array_key_exists("download_uri", $context) ? $context["download_uri"] : (function () { throw new RuntimeError('Variable "download_uri" does not exist.', 45, $this->source); })()))) : ((isset($context["download_uri"]) || array_key_exists("download_uri", $context) ? $context["download_uri"] : (function () { throw new RuntimeError('Variable "download_uri" does not exist.', 45, $this->source); })()))), "html", null, true);
            echo "\" download>
                ";
            // line 46
            echo twig_escape_filter($this->env, ((((isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 46, $this->source); })()) === false)) ? ((isset($context["download_label"]) || array_key_exists("download_label", $context) ? $context["download_label"] : (function () { throw new RuntimeError('Variable "download_label" does not exist.', 46, $this->source); })())) : ($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans((isset($context["download_label"]) || array_key_exists("download_label", $context) ? $context["download_label"] : (function () { throw new RuntimeError('Variable "download_label" does not exist.', 46, $this->source); })()), [], (isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 46, $this->source); })())))), "html", null, true);
            echo "
            </a>";
        }
        // line 49
        echo "</div>";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "@VichUploader/Form/fields.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  174 => 49,  169 => 46,  164 => 45,  162 => 44,  157 => 41,  152 => 40,  150 => 39,  147 => 36,  145 => 35,  143 => 34,  140 => 32,  138 => 31,  136 => 30,  129 => 29,  122 => 26,  120 => 25,  113 => 24,  106 => 21,  101 => 18,  96 => 17,  94 => 16,  91 => 13,  89 => 12,  87 => 11,  84 => 9,  82 => 8,  80 => 7,  73 => 6,  66 => 3,  64 => 2,  57 => 1,  50 => 29,  48 => 24,  46 => 6,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{%- block vich_file_row -%}
    {%- set force_error = true -%}
    {{- block('form_row') -}}
{%- endblock -%}

{%- block vich_file_widget -%}
    <div class=\"vich-file\">
        {%- if errors|length > 0 -%}
            {%- set attr = attr|merge({class: (attr.class|default('') ~ ' is-invalid')|trim}) -%}
        {%- endif -%}
        {{- form_widget(form.file, {attr: attr}) -}}
        {%- if form.delete is defined -%}
            {{- form_row(form.delete) -}}
        {%- endif -%}

        {%- if download_uri -%}
            <a href=\"{{ asset_helper is same as(true) ? asset(download_uri) : download_uri }}\" download>
                {{ translation_domain is same as(false) ? download_label : download_label|trans({}, translation_domain) }}
            </a>
        {%- endif -%}
    </div>
{%- endblock -%}

{%- block vich_image_row -%}
    {%- set force_error = true -%}
    {{- block('form_row') -}}
{%- endblock -%}

{%- block vich_image_widget -%}
    <div class=\"vich-image\">
        {%- if errors|length > 0 -%}
            {%- set attr = attr|merge({class: (attr.class|default('') ~ ' is-invalid')|trim}) -%}
        {%- endif -%}
        {{- form_widget(form.file, {attr: attr}) -}}
        {%- if form.delete is defined -%}
            {{- form_row(form.delete) -}}
        {%- endif -%}

        {%- if image_uri -%}
            <a href=\"{{ asset_helper is same as(true) ? asset(image_uri) : image_uri }}\" download>
                <img src=\"{{ asset_helper is same as(true) ? asset(image_uri) : image_uri }}\" alt=\"\" />
            </a>
        {%- endif -%}
        {%- if download_uri -%}
            <a href=\"{{ asset_helper is same as(true) ? asset(download_uri) : download_uri }}\" download>
                {{ translation_domain is same as(false) ? download_label : download_label|trans({}, translation_domain) }}
            </a>
        {%- endif -%}
    </div>
{%- endblock -%}

", "@VichUploader/Form/fields.html.twig", "D:\\salwa\\assit\\assist\\vendor\\vich\\uploader-bundle\\templates\\Form\\fields.html.twig");
    }
}
